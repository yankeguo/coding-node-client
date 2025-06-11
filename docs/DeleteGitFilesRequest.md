# DeleteGitFilesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommitMessage** | **string** | 提交信息 | [default to undefined]
**DepotId** | **number** | 仓库id | [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]
**Paths** | **Array&lt;string&gt;** | 文件路径列表 | [default to undefined]
**Ref** | **string** | 分支名 | [default to undefined]

## Example

```typescript
import { DeleteGitFilesRequest } from './api';

const instance: DeleteGitFilesRequest = {
    CommitMessage,
    DepotId,
    DepotPath,
    Paths,
    Ref,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
