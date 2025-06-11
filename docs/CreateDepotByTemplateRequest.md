# CreateDepotByTemplateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotName** | **string** | 仓库名 | [default to undefined]
**Description** | **string** | 仓库描述 | [optional] [default to undefined]
**ProjectId** | **number** | 项目Id | [default to undefined]
**Template** | **string** | 仓库模板。目前支持：Spring, Ruby on Rails，Ruby Sinatra，Node.js，Android，Python，Hexo，Jekyll。对应模板参数分别为：SPRING,ROR,SINATRA,NODEJS,ANDROID,FLASK,CLOUD_API_HEXO,CLOUD_API_JEKYLL。如果设置了自定义模版，可以传入自定义模版的仓库Id | [default to undefined]

## Example

```typescript
import { CreateDepotByTemplateRequest } from './api';

const instance: CreateDepotByTemplateRequest = {
    DepotName,
    Description,
    ProjectId,
    Template,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
