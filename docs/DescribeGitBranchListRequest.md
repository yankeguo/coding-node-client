# DescribeGitBranchListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotPath** | **string** | 仓库路径 | [default to undefined]
**KeyWord** | **string** | 查询的关键词 | [optional] [default to undefined]
**PageNumber** | **number** | 分页页码 | [default to undefined]
**PageSize** | **number** | 分页页距,默认为10 | [default to undefined]

## Example

```typescript
import { DescribeGitBranchListRequest } from './api';

const instance: DescribeGitBranchListRequest = {
    DepotPath,
    KeyWord,
    PageNumber,
    PageSize,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
