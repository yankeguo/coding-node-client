# CreateGitProtectedTagRuleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库 Id | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径，与仓库ID二选一 | [optional] [default to undefined]
**Rule** | **string** | 保护规则 | [optional] [default to undefined]

## Example

```typescript
import { CreateGitProtectedTagRuleRequest } from './api';

const instance: CreateGitProtectedTagRuleRequest = {
    DepotId,
    DepotPath,
    Rule,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
