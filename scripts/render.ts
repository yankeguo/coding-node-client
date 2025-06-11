import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

interface JsonObject {
  [key: string]: any;
}

/**
 * 递归遍历对象，应用规则1：将 "type": "uint64" 替换为 "type": "integer"
 */
function applyRule1(obj: any): any {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => applyRule1(item));
  }

  const result: JsonObject = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key === 'type' && value === 'uint64') {
      result[key] = 'integer';
      console.log(`Applied Rule 1: Changed "type": "uint64" to "type": "integer"`);
    } else {
      result[key] = applyRule1(value);
    }
  }

  return result;
}

/**
 * 应用规则2：移除 parameters 数组中的 Authorization header 和 Action query 参数
 */
function applyRule2(obj: any): any {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => applyRule2(item));
  }

  const result: JsonObject = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key === 'parameters' && Array.isArray(value)) {
      // 过滤掉指定的参数
      const filteredParameters = value.filter(param => {
        if (typeof param === 'object' && param !== null) {
          // 检查是否是要移除的 Authorization header 参数
          if (param.name === 'Authorization' && param.in === 'header') {
            console.log(`Applied Rule 2: Removed Authorization header parameter`);
            return false;
          }
          // 检查是否是要移除的 Action query 参数
          if (param.name === 'Action' && param.in === 'query') {
            console.log(`Applied Rule 2: Removed Action query parameter`);
            return false;
          }
        }
        return true;
      }).map(param => applyRule2(param));

      result[key] = filteredParameters;
    } else {
      result[key] = applyRule2(value);
    }
  }

  return result;
}

/**
 * 应用规则3：将 requestBody.content["application/json"].schema 中的 required 数组设置为空
 */
function applyRule3(obj: any): any {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => applyRule3(item));
  }

  const result: JsonObject = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key === 'requestBody' && typeof value === 'object' && value !== null) {
      // 处理 requestBody 对象
      const requestBody = applyRule3(value);
      
      // 检查是否存在 content["application/json"].schema.required
      if (requestBody.content && 
          requestBody.content['application/json'] && 
          requestBody.content['application/json'].schema &&
          Array.isArray(requestBody.content['application/json'].schema.required)) {
        
        console.log(`Applied Rule 3: Cleared required array in requestBody schema`);
        requestBody.content['application/json'].schema.required = [];
      }
      
      result[key] = requestBody;
    } else {
      result[key] = applyRule3(value);
    }
  }

  return result;
}

/**
 * 应用规则4：为所有接口添加认证支持
 */
function applyRule4(obj: any): any {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => applyRule4(item));
  }

  const result: JsonObject = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key === 'components' && typeof value === 'object' && value !== null) {
      // 处理 components 对象，添加 securitySchemes
      const components = applyRule4(value);
      
      components.securitySchemes = {
        BasicAuth: {
          type: 'http',
          scheme: 'basic'
        },
        BearerAuth: {
          type: 'http',
          scheme: 'bearer'
        },
        ApiKeyAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'X-API-Key'
        }
      };
      
      console.log(`Applied Rule 4: Added securitySchemes to components`);
      result[key] = components;
    } else if (key === 'paths' && typeof value === 'object' && value !== null) {
      // 处理 paths 对象，为每个操作添加 security
      const paths: JsonObject = {};
      
      for (const [pathKey, pathValue] of Object.entries(value)) {
        if (typeof pathValue === 'object' && pathValue !== null) {
          const pathObject: JsonObject = {};
          
          for (const [methodKey, methodValue] of Object.entries(pathValue)) {
            if (typeof methodValue === 'object' && methodValue !== null && 
                ['get', 'post', 'put', 'patch', 'delete', 'options', 'head'].includes(methodKey.toLowerCase())) {
              // 为每个HTTP方法添加 security
              const operation = applyRule4(methodValue);
              operation.security = [
                { BasicAuth: [] },
                { BearerAuth: [] },
                { ApiKeyAuth: [] }
              ];
              pathObject[methodKey] = operation;
              console.log(`Applied Rule 4: Added security to ${methodKey.toUpperCase()} ${pathKey}`);
            } else {
              pathObject[methodKey] = applyRule4(methodValue);
            }
          }
          
          paths[pathKey] = pathObject;
        } else {
          paths[pathKey] = applyRule4(pathValue);
        }
      }
      
      result[key] = paths;
    } else {
      result[key] = applyRule4(value);
    }
  }

  return result;
}

/**
 * 主函数：读取、修改并保存 spec.json 文件
 */
async function main() {
  const specFilePath = path.resolve(__dirname, '../spec.json');
  
  try {
    console.log('Reading spec.json file...');
    const specContent = fs.readFileSync(specFilePath, 'utf8');
    
    console.log('Parsing JSON...');
    const specData = JSON.parse(specContent);
    
    console.log('Applying Rule 1: Replace "uint64" with "integer"...');
    let modifiedData = applyRule1(specData);
    
    console.log('Applying Rule 2: Remove Authorization header and Action query parameters...');
    modifiedData = applyRule2(modifiedData);
    
    console.log('Applying Rule 3: Clear required arrays in requestBody schemas...');
    modifiedData = applyRule3(modifiedData);
    
    console.log('Applying Rule 4: Add authentication support to all endpoints...');
    modifiedData = applyRule4(modifiedData);
    
    console.log('Saving modified spec.json...');
    const modifiedContent = JSON.stringify(modifiedData, null, 2);
    fs.writeFileSync(specFilePath, modifiedContent, 'utf8');
    
    console.log('✅ Successfully modified and saved spec.json');

    // 调用 openapi-generator
    console.log('Running openapi-generator...');
    execSync('openapi-generator generate -i spec.json -g typescript-axios -o . --skip-validate-spec', {
      stdio: 'inherit',
      cwd: path.resolve(__dirname, '..'),
    });
    console.log('✅ openapi-generator finished');
    
  } catch (error) {
    console.error('❌ Error processing spec.json:', error);
    process.exit(1);
  }
}

// 运行主函数
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Unhandled error:', error);
    process.exit(1);
  });
}
