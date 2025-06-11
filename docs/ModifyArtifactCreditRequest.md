# ModifyArtifactCreditRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ranges** | [**Array&lt;ArtifactsOpenApiCreateArtifactCreditsRangeData&gt;**](ArtifactsOpenApiCreateArtifactCreditsRangeData.md) | 授信清单范围 | [optional] [default to undefined]
**Enabled** | **boolean** | 是否启用 | [optional] [default to false]
**Id** | **number** | 授信清单ID | [optional] [default to 0]
**Rules** | [**Array&lt;ArtifactsOpenApiArtifactCreditsRuleData&gt;**](ArtifactsOpenApiArtifactCreditsRuleData.md) | 授信清单规则 | [optional] [default to undefined]
**Name** | **string** | 授信清单名称 | [optional] [default to '']

## Example

```typescript
import { ModifyArtifactCreditRequest } from './api';

const instance: ModifyArtifactCreditRequest = {
    Ranges,
    Enabled,
    Id,
    Rules,
    Name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
