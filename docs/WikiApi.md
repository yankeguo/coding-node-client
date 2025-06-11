# WikiApi

All URIs are relative to *https://e.coding.net/open-api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createUploadToken**](#createuploadtoken) | **POST** /?action&#x3D;CreateUploadToken | 上传文件的Token获取|
|[**createWiki**](#createwiki) | **POST** /?action&#x3D;CreateWiki | Wiki创建|
|[**createWikiByZip**](#createwikibyzip) | **POST** /?action&#x3D;CreateWikiByZip | Wiki 通过zip包上传|
|[**deleteWiki**](#deletewiki) | **POST** /?action&#x3D;DeleteWiki | Wiki 移至回收站|
|[**describeImportJobStatus**](#describeimportjobstatus) | **POST** /?action&#x3D;DescribeImportJobStatus | zip包创建wiki的任务状态查询|
|[**describeUpdateJobStatus**](#describeupdatejobstatus) | **POST** /?action&#x3D;DescribeUpdateJobStatus | zip包更新wiki的任务状态查询|
|[**describeWiki**](#describewiki) | **POST** /?action&#x3D;DescribeWiki | Wiki 详情获取|
|[**describeWikiList**](#describewikilist) | **POST** /?action&#x3D;DescribeWikiList | Wiki 列表详情获取|
|[**modifyWiki**](#modifywiki) | **POST** /?action&#x3D;ModifyWiki | Wiki 更新|
|[**modifyWikiByZip**](#modifywikibyzip) | **POST** /?action&#x3D;ModifyWikiByZip | 通过zip包更新wiki|
|[**modifyWikiOrder**](#modifywikiorder) | **POST** /?action&#x3D;ModifyWikiOrder | Wiki 父级修改|
|[**modifyWikiTitle**](#modifywikititle) | **POST** /?action&#x3D;ModifyWikiTitle | Wiki 标题更新|

# **createUploadToken**
> CreateUploadToken200Response createUploadToken()

✨ 获取上传文件的Token，成功后使用uploadLink 上传文件(ex:https://coding-net-test-self-1257242599.cos.ap-shanghai.myqcloud.com/b5d0d8e0-3aca-11eb-8673-a9b6d94ca755.png)

### Example

```typescript
import {
    WikiApi,
    Configuration,
    CreateUploadTokenRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WikiApi(configuration);

let createUploadTokenRequest: CreateUploadTokenRequest; // (optional)

const { status, data } = await apiInstance.createUploadToken(
    createUploadTokenRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createUploadTokenRequest** | **CreateUploadTokenRequest**|  | |


### Return type

**CreateUploadToken200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createWiki**
> CreateWiki200Response createWiki()

✨ Wiki创建

### Example

```typescript
import {
    WikiApi,
    Configuration,
    CreateWikiRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WikiApi(configuration);

let createWikiRequest: CreateWikiRequest; // (optional)

const { status, data } = await apiInstance.createWiki(
    createWikiRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createWikiRequest** | **CreateWikiRequest**|  | |


### Return type

**CreateWiki200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createWikiByZip**
> CreateWikiByZip200Response createWikiByZip()

✨ 通过zip包上传wiki

### Example

```typescript
import {
    WikiApi,
    Configuration,
    CreateWikiByZipRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WikiApi(configuration);

let createWikiByZipRequest: CreateWikiByZipRequest; // (optional)

const { status, data } = await apiInstance.createWikiByZip(
    createWikiByZipRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createWikiByZipRequest** | **CreateWikiByZipRequest**|  | |


### Return type

**CreateWikiByZip200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteWiki**
> DeleteCdHostServerGroup200Response deleteWiki()

✨ 删除Wiki至回收站

### Example

```typescript
import {
    WikiApi,
    Configuration,
    DeleteWikiRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WikiApi(configuration);

let deleteWikiRequest: DeleteWikiRequest; // (optional)

const { status, data } = await apiInstance.deleteWiki(
    deleteWikiRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteWikiRequest** | **DeleteWikiRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeImportJobStatus**
> DescribeImportJobStatus200Response describeImportJobStatus()

✨ 通过zip包创建wiki任务状态查询

### Example

```typescript
import {
    WikiApi,
    Configuration,
    DescribeImportJobStatusRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WikiApi(configuration);

let describeImportJobStatusRequest: DescribeImportJobStatusRequest; // (optional)

const { status, data } = await apiInstance.describeImportJobStatus(
    describeImportJobStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeImportJobStatusRequest** | **DescribeImportJobStatusRequest**|  | |


### Return type

**DescribeImportJobStatus200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeUpdateJobStatus**
> DescribeImportJobStatus200Response describeUpdateJobStatus()

✨ 通过zip包更新wiki任务状态查询

### Example

```typescript
import {
    WikiApi,
    Configuration,
    DescribeImportJobStatusRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WikiApi(configuration);

let describeImportJobStatusRequest: DescribeImportJobStatusRequest; // (optional)

const { status, data } = await apiInstance.describeUpdateJobStatus(
    describeImportJobStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeImportJobStatusRequest** | **DescribeImportJobStatusRequest**|  | |


### Return type

**DescribeImportJobStatus200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeWiki**
> ModifyWiki200Response describeWiki()

✨ 获取Wiki详情

### Example

```typescript
import {
    WikiApi,
    Configuration,
    DescribeWikiRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WikiApi(configuration);

let describeWikiRequest: DescribeWikiRequest; // (optional)

const { status, data } = await apiInstance.describeWiki(
    describeWikiRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeWikiRequest** | **DescribeWikiRequest**|  | |


### Return type

**ModifyWiki200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeWikiList**
> DescribeWikiList200Response describeWikiList()

✨ 获取Wiki列表详情

### Example

```typescript
import {
    WikiApi,
    Configuration,
    DescribeWikiListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WikiApi(configuration);

let describeWikiListRequest: DescribeWikiListRequest; // (optional)

const { status, data } = await apiInstance.describeWikiList(
    describeWikiListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeWikiListRequest** | **DescribeWikiListRequest**|  | |


### Return type

**DescribeWikiList200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyWiki**
> ModifyWiki200Response modifyWiki()

✨ 更新Wiki

### Example

```typescript
import {
    WikiApi,
    Configuration,
    ModifyWikiRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WikiApi(configuration);

let modifyWikiRequest: ModifyWikiRequest; // (optional)

const { status, data } = await apiInstance.modifyWiki(
    modifyWikiRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyWikiRequest** | **ModifyWikiRequest**|  | |


### Return type

**ModifyWiki200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyWikiByZip**
> CreateWikiByZip200Response modifyWikiByZip()

✨ 通过zip包更新wiki

### Example

```typescript
import {
    WikiApi,
    Configuration,
    ModifyWikiByZipRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WikiApi(configuration);

let modifyWikiByZipRequest: ModifyWikiByZipRequest; // (optional)

const { status, data } = await apiInstance.modifyWikiByZip(
    modifyWikiByZipRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyWikiByZipRequest** | **ModifyWikiByZipRequest**|  | |


### Return type

**CreateWikiByZip200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyWikiOrder**
> DeleteCdHostServerGroup200Response modifyWikiOrder()

✨ 修改wiki父级

### Example

```typescript
import {
    WikiApi,
    Configuration,
    ModifyWikiOrderRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WikiApi(configuration);

let modifyWikiOrderRequest: ModifyWikiOrderRequest; // (optional)

const { status, data } = await apiInstance.modifyWikiOrder(
    modifyWikiOrderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyWikiOrderRequest** | **ModifyWikiOrderRequest**|  | |


### Return type

**DeleteCdHostServerGroup200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyWikiTitle**
> ModifyWikiTitle200Response modifyWikiTitle()

✨ Wiki 标题更新

### Example

```typescript
import {
    WikiApi,
    Configuration,
    ModifyWikiTitleRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WikiApi(configuration);

let modifyWikiTitleRequest: ModifyWikiTitleRequest; // (optional)

const { status, data } = await apiInstance.modifyWikiTitle(
    modifyWikiTitleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyWikiTitleRequest** | **ModifyWikiTitleRequest**|  | |


### Return type

**ModifyWikiTitle200Response**

### Authorization

[BasicAuth](../README.md#BasicAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

