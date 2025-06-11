# ServiceHookLogPage

Service Hook 发送记录分页

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Log** | [**Array&lt;ServiceHookLog&gt;**](ServiceHookLog.md) | Service Hook 发送记录列表 | [optional] [default to undefined]
**PageNumber** | **number** | 分页页码 | [optional] [default to undefined]
**PageSize** | **number** | 分页大小 | [optional] [default to undefined]
**TotalCount** | **number** | 总记录数 | [optional] [default to undefined]

## Example

```typescript
import { ServiceHookLogPage } from './api';

const instance: ServiceHookLogPage = {
    Log,
    PageNumber,
    PageSize,
    TotalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
