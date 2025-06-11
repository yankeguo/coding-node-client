# DescribeIssueListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Conditions** | [**Array&lt;IssueCondition&gt;**](IssueCondition.md) | 筛选条件列表 | [optional] [default to undefined]
**IssueType** | **string** | 事项类型  ALL - 全部事项  DEFECT - 缺陷  REQUIREMENT - 需求  MISSION - 任务  EPIC - 史诗 | [default to undefined]
**Limit** | **number** | 限制数目，默认 20 | [optional] [default to undefined]
**Offset** | **number** | 偏移量，默认 0 | [optional] [default to undefined]
**ProjectName** | **string** | 项目名称 | [default to undefined]
**SortKey** | **string** | 排序字段，默认：CODE  可选值：STATUS, CREATED_AT, PRIORITY, UPDATED_AT, DUE_DATE, CODE, JOIN_ITERATION_AT, STATUS_TYPE, ASSIGNEE, PROJECT_ID, ISSUE_STATUS_ID, ISSUE_ITERATION_SORT, ISSUE_ROADMAP_SORT, PARENT_ID, COMPLETED_AT | [optional] [default to undefined]
**SortValue** | **string** | 排序方式  DESC - 倒序（默认值）  ASC - 正序 | [optional] [default to undefined]

## Example

```typescript
import { DescribeIssueListRequest } from './api';

const instance: DescribeIssueListRequest = {
    Conditions,
    IssueType,
    Limit,
    Offset,
    ProjectName,
    SortKey,
    SortValue,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
