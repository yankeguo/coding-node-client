# ServiceHookPage

Service Hook 分页数据

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PageNumber** | **number** | 分页页码 | [optional] [default to undefined]
**PageSize** | **number** | 分页大小 | [optional] [default to undefined]
**ServiceHook** | [**Array&lt;ServiceHook&gt;**](ServiceHook.md) | Service Hook 列表 | [optional] [default to undefined]
**TotalCount** | **number** | 总记录数 | [optional] [default to undefined]

## Example

```typescript
import { ServiceHookPage } from './api';

const instance: ServiceHookPage = {
    PageNumber,
    PageSize,
    ServiceHook,
    TotalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
