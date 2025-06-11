# DescribeTeamIssuesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Conditions** | [**Array&lt;TeamIssueCondition&gt;**](TeamIssueCondition.md) | 筛选条件列表 | [optional] [default to undefined]
**Sorts** | [**Array&lt;TeamIssueSortCondition&gt;**](TeamIssueSortCondition.md) | 排序条件列表 | [optional] [default to undefined]
**PageSize** | **number** | 分页大小， 最大500 | [optional] [default to undefined]
**PageNumber** | **number** | 页码, 从1开始 | [optional] [default to undefined]
**ShowSubIssues** | **boolean** | 是否展示子事项 | [optional] [default to undefined]
**ShowImageOutUrl** | **boolean** | 是否显示描述中真实的图片路径(cos/minio) | [optional] [default to undefined]

## Example

```typescript
import { DescribeTeamIssuesRequest } from './api';

const instance: DescribeTeamIssuesRequest = {
    Conditions,
    Sorts,
    PageSize,
    PageNumber,
    ShowSubIssues,
    ShowImageOutUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
