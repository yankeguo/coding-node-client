# ArtifactsOpenApiArtifactCreditsData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreditKey** | **string** | 授信清单Key | [default to '']
**Ranges** | [**Array&lt;ArtifactsOpenApiArtifactCreditsRangeData&gt;**](ArtifactsOpenApiArtifactCreditsRangeData.md) | 授信清单适用范围列表 | [default to undefined]
**Type** | **string** | 类型: NORMAL&#x3D;普通类型，SYNC&#x3D;来源其他系统同步 | [default to '']
**Enabled** | **boolean** | 是否启用 | [default to false]
**Id** | **number** | 授信清单ID | [default to 0]
**Rules** | [**Array&lt;ArtifactsOpenApiArtifactCreditsRuleData&gt;**](ArtifactsOpenApiArtifactCreditsRuleData.md) | 授信清单适用范围列表 | [default to undefined]
**Name** | **string** | 授信清单名称 | [default to '']

## Example

```typescript
import { ArtifactsOpenApiArtifactCreditsData } from './api';

const instance: ArtifactsOpenApiArtifactCreditsData = {
    CreditKey,
    Ranges,
    Type,
    Enabled,
    Id,
    Rules,
    Name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
