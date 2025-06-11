# DescribeGitFileRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库Id | [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]
**Path** | **string** | 文件路径 | [optional] [default to undefined]
**Ref** | **string** | 分支名 | [default to undefined]

## Example

```typescript
import { DescribeGitFileRequest } from './api';

const instance: DescribeGitFileRequest = {
    DepotId,
    DepotPath,
    Path,
    Ref,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
