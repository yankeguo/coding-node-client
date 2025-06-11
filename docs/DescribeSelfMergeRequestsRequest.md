# DescribeSelfMergeRequestsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAtEndDate** | **string** | mr创建结束时间 | [optional] [default to undefined]
**CreatedAtStartDate** | **string** | mr创建开始时间 | [optional] [default to undefined]
**IsSortDirectionAsc** | **boolean** | 是否正序排序 默认 false | [optional] [default to undefined]
**KeyWord** | **string** | 关键词 | [optional] [default to undefined]
**Label** | **string** | 标签 | [optional] [default to undefined]
**MergerEmail** | **string** | 合并请求合并者邮箱 | [optional] [default to undefined]
**MergerGlobalKey** | **string** | 合并请求合并者全局 key | [optional] [default to undefined]
**PageNumber** | **number** | 页数 默认 1 | [optional] [default to undefined]
**PageSize** | **number** | 每页条数 默认 10 | [optional] [default to undefined]
**ReviewerEmail** | **string** | 合并请求评审者邮箱 | [optional] [default to undefined]
**ReviewerGlobalKey** | **string** | 合并请求评审者全局 key | [optional] [default to undefined]
**Sort** | **string** | 排序 action_at：以更新时间排序  created_at：以创建时间排序 | [optional] [default to undefined]
**SourceBranch** | **string** | 源分支 | [optional] [default to undefined]
**Status** | **string** | 合并请求状态 open/close/all | [optional] [default to undefined]
**TargetBranch** | **string** | 欲合入分支 | [optional] [default to undefined]
**UpdatedAtEndDate** | **string** | mr更新结束时间 | [optional] [default to undefined]
**UpdatedAtStartDate** | **string** | mr更新开始时间 | [optional] [default to undefined]

## Example

```typescript
import { DescribeSelfMergeRequestsRequest } from './api';

const instance: DescribeSelfMergeRequestsRequest = {
    CreatedAtEndDate,
    CreatedAtStartDate,
    IsSortDirectionAsc,
    KeyWord,
    Label,
    MergerEmail,
    MergerGlobalKey,
    PageNumber,
    PageSize,
    ReviewerEmail,
    ReviewerGlobalKey,
    Sort,
    SourceBranch,
    Status,
    TargetBranch,
    UpdatedAtEndDate,
    UpdatedAtStartDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
