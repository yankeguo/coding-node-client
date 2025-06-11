# CreateGitMergeRequestRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Content** | **string** | 描述内容 | [optional] [default to undefined]
**DepotId** | **number** | 仓库 ID | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径，与仓库ID二选一   | [optional] [default to undefined]
**DestBranch** | **string** | 目标分支名 | [optional] [default to undefined]
**SrcBranch** | **string** | 源分支名 | [optional] [default to undefined]
**Title** | **string** | 标题 | [optional] [default to undefined]

## Example

```typescript
import { CreateGitMergeRequestRequest } from './api';

const instance: CreateGitMergeRequestRequest = {
    Content,
    DepotId,
    DepotPath,
    DestBranch,
    SrcBranch,
    Title,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
