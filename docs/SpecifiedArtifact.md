# SpecifiedArtifact

指定的制品

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PackageName** | **string** | 制品包名称（必须配合 VersionName 使用） | [optional] [default to '']
**VersionName** | **string** | 制品版本（必须配合 PackageName 使用） | [optional] [default to '']

## Example

```typescript
import { SpecifiedArtifact } from './api';

const instance: SpecifiedArtifact = {
    PackageName,
    VersionName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
