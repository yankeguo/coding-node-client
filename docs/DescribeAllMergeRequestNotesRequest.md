# DescribeAllMergeRequestNotesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAtEndDate** | **string** | 创建结束时间 | [optional] [default to undefined]
**CreatedAtStartDate** | **string** | 创建开始时间 | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径 | [default to undefined]
**MergeIds** | **Array&lt;number&gt;** | 合并请求的Iid列表 | [optional] [default to undefined]
**MrStatuses** | **Array&lt;string&gt;** | 合并请求的状态列表 | [optional] [default to undefined]
**PageNumber** | **number** | 页码 | [default to undefined]
**PageSize** | **number** | 页数量 | [default to undefined]
**ReporterIds** | **Array&lt;number&gt;** | 合并请求的发起者列表 | [optional] [default to undefined]

## Example

```typescript
import { DescribeAllMergeRequestNotesRequest } from './api';

const instance: DescribeAllMergeRequestNotesRequest = {
    CreatedAtEndDate,
    CreatedAtStartDate,
    DepotPath,
    MergeIds,
    MrStatuses,
    PageNumber,
    PageSize,
    ReporterIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
