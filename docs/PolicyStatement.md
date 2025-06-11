# PolicyStatement

权限组授权句柄

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Action** | **Array&lt;string&gt;** | 权限 action 的二段式描述 | [default to undefined]
**Effect** | **string** | 效能：ALLOW | DENY | [default to '']
**Resource** | **Array&lt;string&gt;** | 授权资源的三段式描述，一般填 * 即可 | [default to undefined]

## Example

```typescript
import { PolicyStatement } from './api';

const instance: PolicyStatement = {
    Action,
    Effect,
    Resource,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
