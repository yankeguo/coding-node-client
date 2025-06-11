# DepartmentDepartmentTreeData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Children** | [**Array&lt;DepartmentDepartmentTreeData&gt;**](DepartmentDepartmentTreeData.md) | 子部门信息 | [default to undefined]
**CreatorId** | **number** | 创建人ID | [default to 0]
**DescribeId** | **string** | 部门描述ID | [default to '']
**Id** | **number** | 部门ID | [default to 0]
**Name** | **string** | 部门名 | [default to '']
**ParentId** | **number** | 父级部门ID | [default to 0]
**Sort** | **number** | 排序值 | [default to 0]
**TeamId** | **number** | 团队ID | [default to 0]

## Example

```typescript
import { DepartmentDepartmentTreeData } from './api';

const instance: DepartmentDepartmentTreeData = {
    Children,
    CreatorId,
    DescribeId,
    Id,
    Name,
    ParentId,
    Sort,
    TeamId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
