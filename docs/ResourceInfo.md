# ResourceInfo

授权的资源信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RelativeResource** | **string** | 资源三段式描述的资源定位描述，支持 path 形式及模糊表达匹配 | [optional] [default to '']
**ResourceId** | **string** | 资源 ID | [default to '']
**ResourceScope** | **string** | 资源三段式描述的 scope，目前固定 coding | [optional] [default to '']
**ResourceType** | **string** | 资源类型：例如 project | [default to '']
**ServiceName** | **string** | 资源三段式描述的 serviceName 部分，表示业务模块 | [optional] [default to '']

## Example

```typescript
import { ResourceInfo } from './api';

const instance: ResourceInfo = {
    RelativeResource,
    ResourceId,
    ResourceScope,
    ResourceType,
    ServiceName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
