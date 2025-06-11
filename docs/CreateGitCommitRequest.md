# CreateGitCommitRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommitFiles** | [**Array&lt;CommitFile&gt;**](CommitFile.md) | 文件列表 | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径 | [optional] [default to undefined]
**LastCommitSha** | **string** | 最后次提交 Sha | [optional] [default to undefined]
**Message** | **string** | 提交文本 | [optional] [default to undefined]
**NewRef** | **string** | 新分支（如果不修改分支名称，不需要传值） | [optional] [default to undefined]
**Ref** | **string** | 基于改动的分支 | [optional] [default to undefined]

## Example

```typescript
import { CreateGitCommitRequest } from './api';

const instance: CreateGitCommitRequest = {
    CommitFiles,
    DepotPath,
    LastCommitSha,
    Message,
    NewRef,
    Ref,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
