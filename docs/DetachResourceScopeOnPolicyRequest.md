# DetachResourceScopeOnPolicyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PolicyId** | **number** | 权限组 ID | [default to undefined]
**ResourceInfos** | [**Array&lt;ResourceInfoOfPolicyScope&gt;**](ResourceInfoOfPolicyScope.md) | 删除的资源 | [default to undefined]

## Example

```typescript
import { DetachResourceScopeOnPolicyRequest } from './api';

const instance: DetachResourceScopeOnPolicyRequest = {
    PolicyId,
    ResourceInfos,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
