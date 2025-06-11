# DescribeGitCommitNoteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommitSha** | **string** | 提交的 Sha | [default to undefined]
**DepotId** | **number** | 仓库id | [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]
**NotesRef** | **string** | 注释 分支 Ref | [default to undefined]

## Example

```typescript
import { DescribeGitCommitNoteRequest } from './api';

const instance: DescribeGitCommitNoteRequest = {
    CommitSha,
    DepotId,
    DepotPath,
    NotesRef,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
