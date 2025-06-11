# ServiceHookApi

All URIs are relative to *https://e.coding.net/open-api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createServiceHook**](#createservicehook) | **POST** /?action&#x3D;CreateServiceHook | Service Hook 创建|
|[**deleteServiceHook**](#deleteservicehook) | **POST** /?action&#x3D;DeleteServiceHook | Service Hook 删除|
|[**describeEvents**](#describeevents) | **POST** /?action&#x3D;DescribeEvents | Service Hook 事件列表查询|
|[**describeServiceHook**](#describeservicehook) | **POST** /?action&#x3D;DescribeServiceHook | Service Hook 查询单条|
|[**describeServiceHookLogs**](#describeservicehooklogs) | **POST** /?action&#x3D;DescribeServiceHookLogs | Service Hook 发送记录分页查询|
|[**describeServiceHooks**](#describeservicehooks) | **POST** /?action&#x3D;DescribeServiceHooks | Service Hook 列表分页查询|
|[**enabledServiceHook**](#enabledservicehook) | **POST** /?action&#x3D;EnabledServiceHook | Service Hook 事件开关|
|[**modifyServiceHook**](#modifyservicehook) | **POST** /?action&#x3D;ModifyServiceHook | Service Hook 修改|
|[**pingServiceHook**](#pingservicehook) | **POST** /?action&#x3D;PingServiceHook | Service Hook 测试|
|[**resendServiceHookLog**](#resendservicehooklog) | **POST** /?action&#x3D;ResendServiceHookLog | Service Hook 重发|

# **createServiceHook**
> CreateServiceHook200Response createServiceHook()

✨ Service Hook 创建

### Example

```typescript
import {
    ServiceHookApi,
    Configuration,
    CreateServiceHookRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ServiceHookApi(configuration);

let authorization: string; //认证信息 (default to undefined)
let action: string; //Action (default to 'CreateServiceHook')
let createServiceHookRequest: CreateServiceHookRequest; // (optional)

const { status, data } = await apiInstance.createServiceHook(
    authorization,
    action,
    createServiceHookRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createServiceHookRequest** | **CreateServiceHookRequest**|  | |
| **authorization** | [**string**] | 认证信息 | defaults to undefined|
| **action** | [**string**] | Action | defaults to 'CreateServiceHook'|


### Return type

**CreateServiceHook200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteServiceHook**
> EnabledServiceHook200Response deleteServiceHook()

✨ Service Hook 删除

### Example

```typescript
import {
    ServiceHookApi,
    Configuration,
    DeleteServiceHookRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ServiceHookApi(configuration);

let authorization: string; //认证信息 (default to undefined)
let action: string; //Action (default to 'DeleteServiceHook')
let deleteServiceHookRequest: DeleteServiceHookRequest; // (optional)

const { status, data } = await apiInstance.deleteServiceHook(
    authorization,
    action,
    deleteServiceHookRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteServiceHookRequest** | **DeleteServiceHookRequest**|  | |
| **authorization** | [**string**] | 认证信息 | defaults to undefined|
| **action** | [**string**] | Action | defaults to 'DeleteServiceHook'|


### Return type

**EnabledServiceHook200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeEvents**
> DescribeEvents200Response describeEvents()

✨ 查询 Service Hook 事件列表，返回事件英文标识、事件中文名、事件分组英文标识、事件分组中文名

### Example

```typescript
import {
    ServiceHookApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ServiceHookApi(configuration);

let authorization: string; //认证信息 (default to undefined)
let action: string; //Action (default to 'DescribeEvents')
let body: object; // (optional)

const { status, data } = await apiInstance.describeEvents(
    authorization,
    action,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **authorization** | [**string**] | 认证信息 | defaults to undefined|
| **action** | [**string**] | Action | defaults to 'DescribeEvents'|


### Return type

**DescribeEvents200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeServiceHook**
> DescribeServiceHook200Response describeServiceHook()

✨ Service Hook 查询

### Example

```typescript
import {
    ServiceHookApi,
    Configuration,
    DescribeServiceHookRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ServiceHookApi(configuration);

let authorization: string; //认证信息 (default to undefined)
let action: string; //Action (default to 'DescribeServiceHook')
let describeServiceHookRequest: DescribeServiceHookRequest; // (optional)

const { status, data } = await apiInstance.describeServiceHook(
    authorization,
    action,
    describeServiceHookRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeServiceHookRequest** | **DescribeServiceHookRequest**|  | |
| **authorization** | [**string**] | 认证信息 | defaults to undefined|
| **action** | [**string**] | Action | defaults to 'DescribeServiceHook'|


### Return type

**DescribeServiceHook200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeServiceHookLogs**
> DescribeServiceHookLogs200Response describeServiceHookLogs()

✨ Service Hook 发送记录分页查询

### Example

```typescript
import {
    ServiceHookApi,
    Configuration,
    DescribeServiceHookLogsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ServiceHookApi(configuration);

let authorization: string; //认证信息 (default to undefined)
let action: string; //Action (default to 'DescribeServiceHookLogs')
let describeServiceHookLogsRequest: DescribeServiceHookLogsRequest; // (optional)

const { status, data } = await apiInstance.describeServiceHookLogs(
    authorization,
    action,
    describeServiceHookLogsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeServiceHookLogsRequest** | **DescribeServiceHookLogsRequest**|  | |
| **authorization** | [**string**] | 认证信息 | defaults to undefined|
| **action** | [**string**] | Action | defaults to 'DescribeServiceHookLogs'|


### Return type

**DescribeServiceHookLogs200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describeServiceHooks**
> DescribeServiceHooks200Response describeServiceHooks()

✨ Service Hook 列表分页查询

### Example

```typescript
import {
    ServiceHookApi,
    Configuration,
    DescribeServiceHooksRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ServiceHookApi(configuration);

let authorization: string; //认证信息 (default to undefined)
let action: string; //Action (default to 'DescribeServiceHooks')
let describeServiceHooksRequest: DescribeServiceHooksRequest; // (optional)

const { status, data } = await apiInstance.describeServiceHooks(
    authorization,
    action,
    describeServiceHooksRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **describeServiceHooksRequest** | **DescribeServiceHooksRequest**|  | |
| **authorization** | [**string**] | 认证信息 | defaults to undefined|
| **action** | [**string**] | Action | defaults to 'DescribeServiceHooks'|


### Return type

**DescribeServiceHooks200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enabledServiceHook**
> EnabledServiceHook200Response enabledServiceHook()

✨ Service Hook 事件开关

### Example

```typescript
import {
    ServiceHookApi,
    Configuration,
    EnabledServiceHookRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ServiceHookApi(configuration);

let authorization: string; //认证信息 (default to undefined)
let action: string; //Action (default to 'EnabledServiceHook')
let enabledServiceHookRequest: EnabledServiceHookRequest; // (optional)

const { status, data } = await apiInstance.enabledServiceHook(
    authorization,
    action,
    enabledServiceHookRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **enabledServiceHookRequest** | **EnabledServiceHookRequest**|  | |
| **authorization** | [**string**] | 认证信息 | defaults to undefined|
| **action** | [**string**] | Action | defaults to 'EnabledServiceHook'|


### Return type

**EnabledServiceHook200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifyServiceHook**
> ModifyServiceHook200Response modifyServiceHook()

✨ Service Hook 修改

### Example

```typescript
import {
    ServiceHookApi,
    Configuration,
    ModifyServiceHookRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ServiceHookApi(configuration);

let authorization: string; //认证信息 (default to undefined)
let action: string; //Action (default to 'ModifyServiceHook')
let modifyServiceHookRequest: ModifyServiceHookRequest; // (optional)

const { status, data } = await apiInstance.modifyServiceHook(
    authorization,
    action,
    modifyServiceHookRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyServiceHookRequest** | **ModifyServiceHookRequest**|  | |
| **authorization** | [**string**] | 认证信息 | defaults to undefined|
| **action** | [**string**] | Action | defaults to 'ModifyServiceHook'|


### Return type

**ModifyServiceHook200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pingServiceHook**
> EnabledServiceHook200Response pingServiceHook()

✨ Service Hook 测试

### Example

```typescript
import {
    ServiceHookApi,
    Configuration,
    PingServiceHookRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ServiceHookApi(configuration);

let authorization: string; //认证信息 (default to undefined)
let action: string; //Action (default to 'PingServiceHook')
let pingServiceHookRequest: PingServiceHookRequest; // (optional)

const { status, data } = await apiInstance.pingServiceHook(
    authorization,
    action,
    pingServiceHookRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pingServiceHookRequest** | **PingServiceHookRequest**|  | |
| **authorization** | [**string**] | 认证信息 | defaults to undefined|
| **action** | [**string**] | Action | defaults to 'PingServiceHook'|


### Return type

**EnabledServiceHook200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 返回信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resendServiceHookLog**
> ResendServiceHookLog200Response resendServiceHookLog()

✨ Service Hook 重发

### Example

```typescript
import {
    ServiceHookApi,
    Configuration,
    ResendServiceHookLogRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ServiceHookApi(configuration);

let authorization: string; //认证信息 (default to undefined)
let action: string; //Action (default to 'ResendServiceHookLog')
let resendServiceHookLogRequest: ResendServiceHookLogRequest; // (optional)

const { status, data } = await apiInstance.resendServiceHookLog(
    authorization,
    action,
    resendServiceHookLogRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resendServiceHookLogRequest** | **ResendServiceHookLogRequest**|  | |
| **authorization** | [**string**] | 认证信息 | defaults to undefined|
| **action** | [**string**] | Action | defaults to 'ResendServiceHookLog'|


### Return type

**ResendServiceHookLog200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 正常返回 |  -  |
|**401** | Invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

