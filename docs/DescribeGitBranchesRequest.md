# DescribeGitBranchesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库id | [default to undefined]
**DepotPath** | **string** | 仓库路径，与DepotId二选一即可 | [optional] [default to undefined]
**KeyWord** | **string** | 查询的关键词 | [optional] [default to undefined]
**PageNumber** | **number** | 分页页码 | [optional] [default to undefined]
**PageSize** | **number** | 分页页距,默认为10 | [optional] [default to undefined]

## Example

```typescript
import { DescribeGitBranchesRequest } from './api';

const instance: DescribeGitBranchesRequest = {
    DepotId,
    DepotPath,
    KeyWord,
    PageNumber,
    PageSize,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
