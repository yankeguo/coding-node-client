# ModifyDepotNameRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库 ID | [optional] [default to undefined]
**DepotName** | **string** | 仓库名称 | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径，与仓库ID二选一 | [optional] [default to undefined]

## Example

```typescript
import { ModifyDepotNameRequest } from './api';

const instance: ModifyDepotNameRequest = {
    DepotId,
    DepotName,
    DepotPath,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
