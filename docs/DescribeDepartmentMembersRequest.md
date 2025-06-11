# DescribeDepartmentMembersRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepartmentId** | **number** | 部门名 | [default to 0]
**KeyWords** | **string** | 关键词 | [optional] [default to '']
**PageNumber** | **number** | 页数 | [default to 0]
**PageSize** | **number** | 每页数量 | [default to 0]
**Pointer** | **boolean** | 是否仅查询当前部门的直接成员 | [optional] [default to false]

## Example

```typescript
import { DescribeDepartmentMembersRequest } from './api';

const instance: DescribeDepartmentMembersRequest = {
    DepartmentId,
    KeyWords,
    PageNumber,
    PageSize,
    Pointer,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
