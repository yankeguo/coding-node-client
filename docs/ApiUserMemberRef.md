# ApiUserMemberRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Assignee** | **boolean** | 是否管理员 | [optional] [default to false]
**DepartmentId** | **number** | 部门ID | [optional] [default to 0]
**DepartmentMemberId** | **number** | 部门成员ID | [optional] [default to 0]
**DepartmentName** | **string** | 部门名 | [optional] [default to '']
**DescribeId** | **string** | 描述ID | [optional] [default to '']
**Pointer** | **boolean** | 是否是当前查询部门的直接成员 | [optional] [default to false]

## Example

```typescript
import { ApiUserMemberRef } from './api';

const instance: ApiUserMemberRef = {
    Assignee,
    DepartmentId,
    DepartmentMemberId,
    DepartmentName,
    DescribeId,
    Pointer,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
