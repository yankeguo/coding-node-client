# DescribeGitCommitDiffRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库id | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]
**Path** | **string** | 查询指定文件时填写 | [optional] [default to undefined]
**Sha** | **string** | 提交id | [optional] [default to undefined]

## Example

```typescript
import { DescribeGitCommitDiffRequest } from './api';

const instance: DescribeGitCommitDiffRequest = {
    DepotId,
    DepotPath,
    Path,
    Sha,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
