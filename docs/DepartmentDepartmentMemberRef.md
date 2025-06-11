# DepartmentDepartmentMemberRef

关联的 部门等信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Assignee** | **boolean** | 是否部门负责人 | [default to false]
**DepartmentId** | **number** | 部门ID | [default to 0]
**DepartmentMemberId** | **number** | 部门成员ID | [default to 0]
**DepartmentName** | **string** | 部门名 | [default to '']
**DescribeId** | **string** | 部门描述ID | [default to '']
**Pointer** | **boolean** | 是否是当前查询部门的直接成员 | [default to false]
**RefId** | **number** | 部门用户的refId | [default to 0]

## Example

```typescript
import { DepartmentDepartmentMemberRef } from './api';

const instance: DepartmentDepartmentMemberRef = {
    Assignee,
    DepartmentId,
    DepartmentMemberId,
    DepartmentName,
    DescribeId,
    Pointer,
    RefId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
