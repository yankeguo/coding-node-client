# ModifyGitMergeRequestRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Content** | **string** | 待修改的合并请求描述 | [optional] [default to undefined]
**DepotId** | **number** | 仓库 ID | [default to undefined]
**DepotPath** | **string** | 仓库路径，与仓库ID二选一 | [optional] [default to undefined]
**MergeId** | **number** | 合并请求 IID | [default to undefined]
**Title** | **string** | 待修改的合并请求标题 | [optional] [default to undefined]

## Example

```typescript
import { ModifyGitMergeRequestRequest } from './api';

const instance: ModifyGitMergeRequestRequest = {
    Content,
    DepotId,
    DepotPath,
    MergeId,
    Title,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
