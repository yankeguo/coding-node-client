# PolicyResourceScopeInfo

权限组的可用资源范围信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | **number** | 创建时间 | [optional] [default to undefined]
**PolicyId** | **number** | 权限组 ID | [optional] [default to undefined]
**Resource** | [**ResourceInfoOfPolicyScope**](ResourceInfoOfPolicyScope.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PolicyResourceScopeInfo } from './api';

const instance: PolicyResourceScopeInfo = {
    CreatedAt,
    PolicyId,
    Resource,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
