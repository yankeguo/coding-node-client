# DescribeGitCommitInfosRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库id | [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]
**EndDate** | **string** | 查询截止日志 | [optional] [default to undefined]
**KeyWord** | **string** | 提交信息中的关键词 | [optional] [default to undefined]
**PageNumber** | **number** | 分页页码 | [optional] [default to undefined]
**PageSize** | **number** | 分页页距 | [optional] [default to undefined]
**Path** | **string** | 文件路径 | [optional] [default to undefined]
**Ref** | **string** | 分支名称 | [default to undefined]
**StartDate** | **string** | 查询起始日期 | [optional] [default to undefined]

## Example

```typescript
import { DescribeGitCommitInfosRequest } from './api';

const instance: DescribeGitCommitInfosRequest = {
    DepotId,
    DepotPath,
    EndDate,
    KeyWord,
    PageNumber,
    PageSize,
    Path,
    Ref,
    StartDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
