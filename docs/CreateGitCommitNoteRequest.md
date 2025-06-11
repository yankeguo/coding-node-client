# CreateGitCommitNoteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommitMessage** | **string** | 提交信息 | [optional] [default to undefined]
**CommitSha** | **string** | 提交的 Sha | [optional] [default to undefined]
**DepotId** | **number** | 仓库id | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]
**Note** | **string** | 注释的详情信息 | [optional] [default to undefined]
**NotesRef** | **string** | 注释分支 ref。建议默认不填 | [optional] [default to undefined]

## Example

```typescript
import { CreateGitCommitNoteRequest } from './api';

const instance: CreateGitCommitNoteRequest = {
    CommitMessage,
    CommitSha,
    DepotId,
    DepotPath,
    Note,
    NotesRef,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
