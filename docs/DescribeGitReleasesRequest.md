# DescribeGitReleasesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库id | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]
**FromDate** | **string** | 搜索条件:起始日期 | [optional] [default to undefined]
**PageNumber** | **number** | 页数 | [optional] [default to undefined]
**PageSize** | **number** | 每页条数 | [optional] [default to undefined]
**Status** | **number** | 搜索条件:版本状态(0:全部 1:已发布 2:预发布) | [optional] [default to undefined]
**TagName** | **string** | 搜索条件:标签名字 | [optional] [default to undefined]
**ToDate** | **string** | 搜索条件:终止日期 | [optional] [default to undefined]
**ShowResourceUrl** | **boolean** | 是否展示资源地址 | [optional] [default to undefined]

## Example

```typescript
import { DescribeGitReleasesRequest } from './api';

const instance: DescribeGitReleasesRequest = {
    DepotId,
    DepotPath,
    FromDate,
    PageNumber,
    PageSize,
    Status,
    TagName,
    ToDate,
    ShowResourceUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
