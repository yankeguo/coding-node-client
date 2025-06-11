# ResourceReferenceResourceScope

资源所属主体信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ScopeType** | **number** | 所属主体类型： 1项目、2团队 | [default to 0]
**ScopeName** | **string** | 所属主体名 | [default to '']
**ScopeDisplayName** | **string** | 所属主体展示名 | [default to '']
**ScopeId** | **number** | 所属主体ID | [default to 0]

## Example

```typescript
import { ResourceReferenceResourceScope } from './api';

const instance: ResourceReferenceResourceScope = {
    ScopeType,
    ScopeName,
    ScopeDisplayName,
    ScopeId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
