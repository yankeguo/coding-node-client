# DescribeGitFileContentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommitSha** | **string** | commit的sha值 | [default to undefined]
**DepotId** | **number** | 仓库id | [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]
**Path** | **string** | 文件路径 | [default to undefined]

## Example

```typescript
import { DescribeGitFileContentRequest } from './api';

const instance: DescribeGitFileContentRequest = {
    CommitSha,
    DepotId,
    DepotPath,
    Path,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
