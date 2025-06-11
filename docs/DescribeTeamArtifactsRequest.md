# DescribeTeamArtifactsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PageNumber** | **number** | 页码，默认：1 | [optional] [default to undefined]
**PageSize** | **number** | 每页展示数量，默认：10 | [optional] [default to undefined]
**Rule** | [**ArtifactFilterRule**](ArtifactFilterRule.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DescribeTeamArtifactsRequest } from './api';

const instance: DescribeTeamArtifactsRequest = {
    PageNumber,
    PageSize,
    Rule,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
