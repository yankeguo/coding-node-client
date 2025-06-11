# ModifyDepotDescriptionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库 ID | [default to undefined]
**DepotPath** | **string** | 仓库路径，与仓库ID二选一 | [optional] [default to undefined]
**Description** | **string** | 仓库描述信息 | [default to undefined]

## Example

```typescript
import { ModifyDepotDescriptionRequest } from './api';

const instance: ModifyDepotDescriptionRequest = {
    DepotId,
    DepotPath,
    Description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
