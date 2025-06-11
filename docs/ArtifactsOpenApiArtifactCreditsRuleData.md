# ArtifactsOpenApiArtifactCreditsRuleData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **string** | 制品版本 | [default to '']
**ArtifactType** | **number** | 制品的类型(1-generic;2-docker;3-maven;4-npm;5-pypi;6-helm;7-composer;8-nuget;9-conan,10-cocoapods,11-rpm,12-Go) | [default to undefined]
**PkgNameAlgorithm** | **string** | 制品名称计算规则：1-EQUAL(等于)，2-REGEX(正则表达式) | [default to '']
**PkgName** | **string** | 制品名称 | [default to '']
**VersionAlgorithm** | **string** | 制品版本计算规则：1-EQUAL(等于)，2-REGEX(正则表达式) | [default to '']

## Example

```typescript
import { ArtifactsOpenApiArtifactCreditsRuleData } from './api';

const instance: ArtifactsOpenApiArtifactCreditsRuleData = {
    Version,
    ArtifactType,
    PkgNameAlgorithm,
    PkgName,
    VersionAlgorithm,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
