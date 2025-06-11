# BranchProtection

保护分支规则详情信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoAddReviewer** | **boolean** | 自动添加评审着 | [optional] [default to false]
**BranchProtectionId** | **number** | 保护分支规则id | [optional] [default to undefined]
**DenyForcePush** | **boolean** | 是否禁止强制推送 | [optional] [default to false]
**ForceSquash** | **boolean** | 是否使用squash推送 | [optional] [default to false]
**MatcherCount** | **number** | 匹配到的分支数量 | [optional] [default to undefined]
**RequiredCodeOwnerGrant** | **boolean** | 是否需要文件 owner 授权 | [optional] [default to false]
**RequiredDiscussionResolved** | **boolean** | 已解决必需的讨论 | [optional] [default to false]
**RequiredGrantCount** | **number** | 合并请求允许合并授权数量 | [optional] [default to undefined]
**RequiredStatusCheck** | **boolean** | 是否开启状态检查 | [optional] [default to false]
**Rule** | **string** | 保护分支规则 | [optional] [default to '']
**SrcMustMergedTo** | **string** | 源分支必须已经合并到的某个分支,默认位空串 | [optional] [default to '']

## Example

```typescript
import { BranchProtection } from './api';

const instance: BranchProtection = {
    AutoAddReviewer,
    BranchProtectionId,
    DenyForcePush,
    ForceSquash,
    MatcherCount,
    RequiredCodeOwnerGrant,
    RequiredDiscussionResolved,
    RequiredGrantCount,
    RequiredStatusCheck,
    Rule,
    SrcMustMergedTo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
