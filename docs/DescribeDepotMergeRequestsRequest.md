# DescribeDepotMergeRequestsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAtEndDate** | **string** | mr创建结束时间 | [optional] [default to undefined]
**CreatedAtStartDate** | **string** | mr创建开始时间 | [optional] [default to undefined]
**CreatorEmails** | **Array&lt;string&gt;** | 合并请求创建者邮箱列表 | [optional] [default to undefined]
**CreatorGlobalKeys** | **Array&lt;string&gt;** | 合并请求创建者 Global Key 列表 | [optional] [default to undefined]
**DepotId** | **number** | 仓库 ID | [default to undefined]
**DepotPath** | **string** | 仓库路径 | [optional] [default to undefined]
**IsSortDirectionAsc** | **boolean** | 是否升序 | [optional] [default to undefined]
**KeyWord** | **string** | 关键词 | [optional] [default to undefined]
**Labels** | **Array&lt;string&gt;** | 关联标签 | [optional] [default to undefined]
**MergerEmails** | **Array&lt;string&gt;** | 合并请求合并者邮箱列表 | [optional] [default to undefined]
**MergerGlobalKeys** | **Array&lt;string&gt;** | 合并请求合并者 Global Key 列表 | [optional] [default to undefined]
**PageNumber** | **number** | 页数 默认为1 | [optional] [default to undefined]
**PageSize** | **number** | 每页数量 默认为10 | [optional] [default to undefined]
**ReviewerEmails** | **Array&lt;string&gt;** | 合并请求评审者邮箱列表 | [optional] [default to undefined]
**ReviewerGlobalKeys** | **Array&lt;string&gt;** | 评审者 Global Key 列表 | [optional] [default to undefined]
**Sort** | **string** | 排序 created_at merged_at action_at | [optional] [default to undefined]
**SourceBranches** | **Array&lt;string&gt;** | 源分支 | [optional] [default to undefined]
**Status** | **string** | 合并请求状态 OPEN CLOSE ALL ACCEPTED | [optional] [default to undefined]
**TargetBranches** | **Array&lt;string&gt;** | 目标分支 | [optional] [default to undefined]
**UpdatedAtEndDate** | **string** | mr更新结束时间 | [optional] [default to undefined]
**UpdatedAtStartDate** | **string** | mr更新开始时间 | [optional] [default to undefined]

## Example

```typescript
import { DescribeDepotMergeRequestsRequest } from './api';

const instance: DescribeDepotMergeRequestsRequest = {
    CreatedAtEndDate,
    CreatedAtStartDate,
    CreatorEmails,
    CreatorGlobalKeys,
    DepotId,
    DepotPath,
    IsSortDirectionAsc,
    KeyWord,
    Labels,
    MergerEmails,
    MergerGlobalKeys,
    PageNumber,
    PageSize,
    ReviewerEmails,
    ReviewerGlobalKeys,
    Sort,
    SourceBranches,
    Status,
    TargetBranches,
    UpdatedAtEndDate,
    UpdatedAtStartDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
