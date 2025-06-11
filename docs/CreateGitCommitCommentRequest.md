# CreateGitCommitCommentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Content** | **string** | 评论的内容 | [default to undefined]
**DepotId** | **number** | 仓库id | [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]
**Index** | **number** | diff信息中的第几行 | [default to undefined]
**Path** | **string** | 文件路径 | [default to undefined]
**Sha** | **string** | 提交id | [default to undefined]

## Example

```typescript
import { CreateGitCommitCommentRequest } from './api';

const instance: CreateGitCommitCommentRequest = {
    Content,
    DepotId,
    DepotPath,
    Index,
    Path,
    Sha,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
