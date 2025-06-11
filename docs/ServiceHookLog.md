# ServiceHookLog

Service Hook 发送记录

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | **number** | 创建时间 | [optional] [default to undefined]
**Event** | **string** | 事件名 | [optional] [default to '']
**Id** | **string** | 日志记录编号 | [optional] [default to '']
**RequestContent** | **string** | 发送请求内容 | [optional] [default to '']
**RequestHeaders** | **string** | 发送请求头 | [optional] [default to '']
**RequestId** | **string** | 发送请求编号 | [optional] [default to '']
**ResponseAt** | **number** | 响应事件 | [optional] [default to undefined]
**ResponseBody** | **string** | 响应内容 | [optional] [default to '']
**ResponseHeaders** | **string** | 响应头 | [optional] [default to '']
**ResponseStatus** | **number** | 响应状态码 | [optional] [default to undefined]
**SendAt** | **number** | 发送事件 | [optional] [default to undefined]
**ServiceHookId** | **string** | Service Hook 编号 | [optional] [default to '']
**Status** | **number** | 发送状态 | [optional] [default to undefined]

## Example

```typescript
import { ServiceHookLog } from './api';

const instance: ServiceHookLog = {
    CreatedAt,
    Event,
    Id,
    RequestContent,
    RequestHeaders,
    RequestId,
    ResponseAt,
    ResponseBody,
    ResponseHeaders,
    ResponseStatus,
    SendAt,
    ServiceHookId,
    Status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
