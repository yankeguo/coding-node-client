# ModifyGitCommitStatusRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommitSha** | **string** | 提交id | [optional] [default to undefined]
**Context** | **string** | 流水线文本内容 | [optional] [default to undefined]
**DepotId** | **number** | 仓库id | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]
**Description** | **string** | 流水线状态描述 | [optional] [default to undefined]
**State** | **string** | 提交状态 | [optional] [default to undefined]
**TargetURL** | **string** | 流水线链接地址 | [optional] [default to undefined]

## Example

```typescript
import { ModifyGitCommitStatusRequest } from './api';

const instance: ModifyGitCommitStatusRequest = {
    CommitSha,
    Context,
    DepotId,
    DepotPath,
    Description,
    State,
    TargetURL,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
