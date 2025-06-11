# CreateProgramMemberPolicyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Policies** | **Array&lt;string&gt;** | 权限策略，默认策略名或者策略 ID | [optional] [default to undefined]
**PrincipalId** | **string** | 身份 ID | [optional] [default to undefined]
**PrincipalType** | **string** | 身份类型 | [optional] [default to undefined]
**ProgramId** | **number** | 项目集 ID | [optional] [default to 0]

## Example

```typescript
import { CreateProgramMemberPolicyRequest } from './api';

const instance: CreateProgramMemberPolicyRequest = {
    Policies,
    PrincipalId,
    PrincipalType,
    ProgramId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
