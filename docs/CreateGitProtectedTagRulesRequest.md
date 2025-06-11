# CreateGitProtectedTagRulesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库 Id | [default to undefined]
**DepotPath** | **string** | 仓库路径 | [optional] [default to undefined]
**Rule** | **Array&lt;string&gt;** | 保护规则列表 | [default to undefined]

## Example

```typescript
import { CreateGitProtectedTagRulesRequest } from './api';

const instance: CreateGitProtectedTagRulesRequest = {
    DepotId,
    DepotPath,
    Rule,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
