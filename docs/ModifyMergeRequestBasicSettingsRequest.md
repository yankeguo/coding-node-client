# ModifyMergeRequestBasicSettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CancelMrGrantAfterPushSrc** | **boolean** | 合并请求源分支有新提交时是否自动取消合并授权 | [default to undefined]
**DefaultFastForwardMerge** | **boolean** | 是否默认以 Fast-Forward 模式合并 | [default to undefined]
**DefaultTargetBranch** | **string** | 合并请求默认分支 | [optional] [default to undefined]
**DeleteSrcBranchAfterMerged** | **boolean** | 是否默认删除源分支 | [default to undefined]
**DepotPath** | **string** | 仓库路径，格式：&lt;team&gt;/&lt;project&gt;/&lt;depot&gt; | [default to undefined]
**DepotStatusCheckRequired** | **boolean** | 是否开启状态检查 | [default to undefined]
**MrCheckAllReviewersAllow** | **boolean** | 合并前是否必须获得所有评审者的允许合并 | [default to undefined]
**SquashOnMerge** | **string** | 合并请求选择方式no_squash:默认直接合并default_squash:默认Squash合并 force_squash:只能Squash合并 | [optional] [default to undefined]

## Example

```typescript
import { ModifyMergeRequestBasicSettingsRequest } from './api';

const instance: ModifyMergeRequestBasicSettingsRequest = {
    CancelMrGrantAfterPushSrc,
    DefaultFastForwardMerge,
    DefaultTargetBranch,
    DeleteSrcBranchAfterMerged,
    DepotPath,
    DepotStatusCheckRequired,
    MrCheckAllReviewersAllow,
    SquashOnMerge,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
