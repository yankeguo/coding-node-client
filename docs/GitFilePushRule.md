# GitFilePushRule

git 文件推送权限规则

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FilePushRuleId** | **number** | 文件推送规则 ID | [optional] [default to undefined]
**IsDenyForAllUser** | **boolean** | 拒绝所有人推送 | [optional] [default to false]
**Pattern** | **string** | 文件路径 | [optional] [default to '']
**Privileges** | [**Array&lt;GitFilePushRulePrivilege&gt;**](GitFilePushRulePrivilege.md) | 特权者列表 | [optional] [default to undefined]

## Example

```typescript
import { GitFilePushRule } from './api';

const instance: GitFilePushRule = {
    FilePushRuleId,
    IsDenyForAllUser,
    Pattern,
    Privileges,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
