# DescribeIssueListWithPageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Conditions** | [**IssueCondition**](IssueCondition.md) |  | [optional] [default to undefined]
**ExcludeSubTask** | **boolean** | 是否展示子工作项 | [optional] [default to undefined]
**IssueType** | **string** | ALL - 全部事项 DEFECT - 缺陷 REQUIREMENT - 需求 MISSION - 任务 EPIC - 史诗 | [optional] [default to undefined]
**PageNumber** | **number** | 页码 | [optional] [default to undefined]
**PageSize** | **number** | 每页展示数，默认 20 ，最大值 500 | [optional] [default to undefined]
**ProjectName** | **string** | 项目名称 | [optional] [default to undefined]
**ShowSubIssues** | **boolean** | 是否展示子事项 | [optional] [default to undefined]
**SortKey** | **string** | 排序字段，默认：CODE 可选值：STATUS, CREATED_AT, PRIORITY, UPDATED_AT, DUE_DATE, CODE, JOIN_ITERATION_AT, STATUS_TYPE, ASSIGNEE, PROJECT_ID, ISSUE_STATUS_ID, ISSUE_ITERATION_SORT, ISSUE_ROADMAP_SORT, PARENT_ID, COMPLETED_AT | [optional] [default to undefined]
**SortValue** | **string** |  排序方式 DESC - 倒序（默认值） ASC - 正序 | [optional] [default to undefined]

## Example

```typescript
import { DescribeIssueListWithPageRequest } from './api';

const instance: DescribeIssueListWithPageRequest = {
    Conditions,
    ExcludeSubTask,
    IssueType,
    PageNumber,
    PageSize,
    ProjectName,
    ShowSubIssues,
    SortKey,
    SortValue,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
