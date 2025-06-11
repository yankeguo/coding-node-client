# DepotPushSetting

仓库推送规则信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CheckCommitAuthor** | **boolean** | 检查 Git 提交的提交者 (Committer) 和提交作者 (Author) 必须是已验证的邮箱。 | [optional] [default to false]
**CommitMessageMustMatchRegex** | **string** | Git 提交信息的格式校验 | [optional] [default to '']
**DenyForcePush** | **boolean** | 禁止强制推送 (Force Push) | [optional] [default to false]
**PushDenyFile** | **string** | 禁止推送的文件（文件类型用换行符隔开） | [optional] [default to '']
**PushFileSize** | **string** | 开启单次提交的文件总大小限制，Git LFS 文件除外（单位MB） | [optional] [default to '']

## Example

```typescript
import { DepotPushSetting } from './api';

const instance: DepotPushSetting = {
    CheckCommitAuthor,
    CommitMessageMustMatchRegex,
    DenyForcePush,
    PushDenyFile,
    PushFileSize,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
