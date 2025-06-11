# ProtectedBranch

保护分支详情

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommitDate** | **number** | 提交时间戳,单位毫秒 | [optional] [default to undefined]
**DenyForcePush** | **boolean** | 是否禁止强制推送 | [optional] [default to false]
**ForceSquash** | **boolean** | 是否使用 squash 推送 | [optional] [default to false]
**Name** | **string** | 名称 | [optional] [default to '']
**StatusCheck** | **boolean** | 是否开启状态检查 | [optional] [default to false]

## Example

```typescript
import { ProtectedBranch } from './api';

const instance: ProtectedBranch = {
    CommitDate,
    DenyForcePush,
    ForceSquash,
    Name,
    StatusCheck,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
