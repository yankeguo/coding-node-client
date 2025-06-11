# ModifyGitFilesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库 ID | [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]
**GitFiles** | [**Array&lt;GitFile&gt;**](GitFile.md) | 修改的文件 | [default to undefined]
**LastCommitSha** | **string** | 最后次提交 Sha | [default to undefined]
**Message** | **string** | 提交文本 | [default to undefined]
**NewRef** | **string** | 要提交的新分支 | [optional] [default to undefined]
**Ref** | **string** | 基于改动的分支 | [default to undefined]

## Example

```typescript
import { ModifyGitFilesRequest } from './api';

const instance: ModifyGitFilesRequest = {
    DepotId,
    DepotPath,
    GitFiles,
    LastCommitSha,
    Message,
    NewRef,
    Ref,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
