# ModifyReleaseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Assignee** | **number** | 修改之后的处理人ID | [optional] [default to undefined]
**DelIterationCodes** | **Array&lt;number&gt;** | 需要删除的版本已关联的迭代的列表 | [optional] [default to undefined]
**DelLabelIds** | **Array&lt;number&gt;** | 需要删除的标签的ID列表 | [optional] [default to undefined]
**Description** | **string** | 修改之后的版本描述 | [optional] [default to undefined]
**IterationCodes** | **Array&lt;number&gt;** | 版本关联的迭代code列表 | [optional] [default to undefined]
**LabelIds** | **Array&lt;number&gt;** | 需要添加的标签的ID列表 | [optional] [default to undefined]
**Name** | **string** | 修改之后的版本名 | [optional] [default to undefined]
**ProjectName** | **string** | 项目名称  | [default to undefined]
**ReleaseCode** | **number** | 页面上版本ID | [default to undefined]
**ReleaseDate** | **string** | 修改之后的版本发布日期 | [optional] [default to undefined]
**StartDate** | **string** | 修改之后的版本开始日期 | [optional] [default to undefined]
**StatusId** | **number** | 修改之后的状态ID | [optional] [default to undefined]

## Example

```typescript
import { ModifyReleaseRequest } from './api';

const instance: ModifyReleaseRequest = {
    Assignee,
    DelIterationCodes,
    DelLabelIds,
    Description,
    IterationCodes,
    LabelIds,
    Name,
    ProjectName,
    ReleaseCode,
    ReleaseDate,
    StartDate,
    StatusId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
